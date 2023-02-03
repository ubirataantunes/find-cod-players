import './Banner.css';

export default function Banner() {

    return (
        <header className='banner grid justify-items-center'>
            <img src="/images/bannerWZ.jpg" alt="Banner COD Warzone 2.0" className='max-w-xl max-md:max-w-lg'/>
            <p className='text-xl'>Find Warzone players here!</p>
        </header>
    )
}