import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import * as AiIcons from 'react-icons/ai';
import { ImCoinDollar } from 'react-icons/im';
import { BiSolidHelpCircle } from 'react-icons/bi';
import { FaHandHoldingDollar } from 'react-icons/fa6'

export const SidebarData = [
    {
        id:0,
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        Name: 'nav-text'
    },
    {
        id:1,
        title: 'Sustainable Product',
        path: '/Sustainableproduct',
        icon: <FaHandHoldingDollar />,
        Name: 'nav-text'
    },
    {
        id:2,
        title: 'Green Market Place',
        path: '/GreenMarketPlace',
        icon: <BsCart4 />,
        Name: 'nav-text'
    },
    {
        id:3,
        title: 'My Portfolio',
        path: '/MyPortfolio',
        icon: <RiMoneyDollarCircleLine />,
        Name: 'nav-text'
    },
    ,
    {
        id:4,
        title: 'Loyalty Points',
        path: '/LoyalityPoints',
        icon: <ImCoinDollar />,
        Name: 'nav-text'
    },
    {
        id:5,
        title: 'Settings',
        path: '/Settings',
        icon: <AiIcons.AiFillSetting />,
        Name: 'nav-text'
    },
    {
        id:6,
        title: 'Help & FAQs',
        path: '/Help',
        icon: <BiSolidHelpCircle />,
        Name: 'nav-text'
    },
    {
        id:7,
        title: 'EXIT',
        path: '/Model',
        icon: <AiIcons.AiOutlinePoweroff />,
        Name: 'nav-text'
    }

]