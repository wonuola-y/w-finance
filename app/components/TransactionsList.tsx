import React from 'react'
import {useState} from "react";
import Image, { StaticImageData } from 'next/image'
import Transaction_page from './transaction_page';
import previous from '../assets/Icons/prev.png'
import nextImg from '../assets/Icons/next.png'
import pagination from '../assets/Icons/paginatin.png'
import TransactionHeader from './transactionHeader';
;

type Transaction = {
    id : number,
    text: string,
    img: string | StaticImageData ,
    color: string,
    amount: string,
    date: string,
    category: string,
}

type Props = {
    Transactions : Transaction[],
    itemsPerPage: number
}
const TransactionList = ({Transactions, itemsPerPage}:Props) =>{
    const [currentPage, setCurrentPage] = useState(1);

    //correctly calculate total pages
    const totalPages = Math.ceil(Transactions.length / itemsPerPage);
    //valid current page
    const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));


    //Get users for current page
    const indexOfFirstTransaction = (validCurrentPage -1) * itemsPerPage
    const indexOfLastTransaction = Math.min(indexOfFirstTransaction + itemsPerPage, Transactions.length)
    const currentTransactions = Transactions.slice(indexOfFirstTransaction,indexOfLastTransaction)

    return (
        <div className = 'w-full pb-8 ' >
            <div className=' hidden md:block'><TransactionHeader/></div>
            {currentTransactions.map((t) => (
                <Transaction_page key = {t.id} text = {t.text} img = {t.img} color = {t.color} amount = {t.amount} date = {t.date} category = {t.category}/>
            ))}
            <div style = {styles.pagination} className='w-auto flex justify-between items-center'>
                <button onClick = {() => setCurrentPage((prev) => Math.max(prev-1, 1))}
                    disabled = {currentPage === 1} style = {styles.prev}
                    className = 'flex rounded md:w-auto h-7 w-10 md md:px-3 text-grey-300 p- flex-row items-center justify-center md:justify-evenly border-solid border-[1px] border-gray-300 '>
                        
                        <span><Image src={pagination} width={40} height={40} className='w-4 h-4' alt='user expense img' /></span>
                        <span className='text-brand-text_gray text-[10px] hidden  md:block '>Prev</span>
                </button>
                <div className='flex justify-center gap-x-4 items-center'>
                {Array.from({length:totalPages}, (_, i) =>(
                    <button key = {i + 1} onClick = {() => setCurrentPage(i + 1)} 
                    style = {currentPage === i + 1 ? styles.activePage : styles.unActive  }
                    className='text-brand-text_gray text-[10px]'>
                        {i+1}
                    </button>
                ))}
                </div>
                <button onClick = {() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled = {currentPage === totalPages}
                    style = {styles.next}
                    className = 'flex rounded  h-7 w-10 md:w-auto text-grey-300 md:px-3 flex-row items-center justify-center md:justify-evenly border-solid border-[1px] border-gray-300 '
                    >
                    <span className='text-brand-text_gray text-[10px] hidden md:block '>Next</span>
                    <span><Image src={pagination} width={40} height={40} className='transform rotate-180 w-4 h-4' alt='user expense img' /></span>
                </button>
            </div>
        </div>
    );
};

const styles = {
    activePage : {
        fontWeight : "bold",
        color : "white",
        backgroundColor: "black",
        width: "25px",
        height : "25px",
        padding : "10px",
        display: "flex",
        alignItems: "center",
        justifyContents : "center",
        borderRadius : "3px",
        border: "solid 1px #98908B"
    },
    pagination : {
        marginTop: "10px",
        
    },
    unActive: {
        
        backgroundColor: "white",
        color: "black",
        width: "25px",
        height : "25px",
        border: "solid 1px #98908B",
        padding : "10px",
        display: "flex",
        alignItems: "center",
        justifyContents : "center",
        borderRadius : "3px",
    },
    prev : {
        
       
        

    },
    next : {
        
        
        
    }
}

export default TransactionList