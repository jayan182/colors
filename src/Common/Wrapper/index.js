import NavBar from '../Nav/index';
import Footer from '../Footer/index';
import Index from '../BreadCrumb/index';

function Wrapper({children}) {
    return (
        <>
            <NavBar />
                <Index />
                <div div style={{display:'flex', alignItems:'center',justifyContent: 'center'}}>
                    {children}
                </div>
            <Footer />
        </>
    );
}

export default Wrapper;