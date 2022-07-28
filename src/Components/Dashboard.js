import React from 'react'
import './Dashboard.css'
import Task from './Task'
import InputTask from './InputTask'
import Logo from '../resources/Logo.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import {BiFilter} from 'react-icons/bi'

// import FilterListIcon from '../node_modules/@mui/icons-material/FilterList';
function Dashboard() {
    return (
        <>
            <div className='dashboard'>
                <div className='dashboard_header'>
                    <img src={Logo} />
                    <div className='searchbar'>
                        <AiOutlineSearch className='searchIcon' />
                        <input type='text' placeholder='search'></input>
                    </div>
                    <div className='username'>
                        <h1>Hii Abhishek </h1>
                        <img src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg' />
                    </div>
                </div>
                <div className='SubtitleAndFilter'>
                    <h1>Projects</h1>
                    <div className='filter'>
                        <BiFilter className='filter_icon' />
                        <p>Filter</p>
                    </div>
                </div>
                <div className='all_tasks'>
                    <div className='todo_task'>
                        <h2>To Do</h2>
                        <button>+</button>
                        <InputTask />
                        <Task />
                    </div>
                    <div className='todo_task'>
                        <h2>In Progress</h2>
                        <Task />
                    </div>
                    <div className='todo_task'>
                        <h2>Completed</h2>
                        <Task />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard