import Header from './Header';
import { useSelector } from 'react-redux';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
