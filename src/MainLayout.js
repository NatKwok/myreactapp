import React from "react";
import {Outlet} from "react-router-dom";
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function MainLayout() {
return <div>
<Header />
<br></br>
<Outlet />
<br></br>
<Footer />
</div>
} 

export default MainLayout;