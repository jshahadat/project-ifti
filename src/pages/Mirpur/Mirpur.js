import React from 'react';
import ElectricianServices from './ElectricianServices/ElectricianServices';
import HomeAppliancesServices from './HomeAppliancesServices/HomeAppliancesServices';
import SameDayServices from './SameDayServices/SameDayServices';
import TelevisionServices from './TelevisionServices/TelevisionServices';
import TrendingServices from './TrendingServices/TrendingServices';
import Header from './Whatareyoulookingfor/Header/Header';

const Mirpur = () => {
    return (
        <div>
            <Header></Header>
            <SameDayServices></SameDayServices>
            <TrendingServices></TrendingServices>
            <HomeAppliancesServices></HomeAppliancesServices>
            <ElectricianServices></ElectricianServices>
            <TelevisionServices></TelevisionServices>
        </div>
    );
};

export default Mirpur;