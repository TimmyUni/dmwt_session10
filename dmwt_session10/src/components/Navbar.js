import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, background: '#6B2222', padding: '20px', zIndex: 1000 }}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'flex-end' }}>
          <li style={{ marginRight: '10px' }}>
            <Link href="/" style={{ textDecoration: 'none', color: router.pathname === '/' ? '#6B2222' : 'white', background: router.pathname === '/' ? 'white' : '#6B2222', padding: '5px 10px', borderRadius: '5px' , fontSize: router.pathname ===  '/' ? '20px' : '15px'}}>Main</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link href="/food" style={{ textDecoration: 'none', color: router.pathname === '/food' ? '#6B2222' : 'white' , background: router.pathname === '/food' ? 'white' : '#6B2222', padding: '5px 10px', borderRadius: '5px', fontSize: router.pathname ===  '/food' ? '20px' : '15px' }}>Food</Link>
          </li>
        </ul>
      </nav>
      <div style={{ height: '50px' }}></div>
    </>
  );
};

export default Navbar;
