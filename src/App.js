import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import OrderPreview from './component/OrderPreview/OrderPreview';
import Products from './component/Products/Products';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Products></Products>
        },
        {
          path:'/orders',
          element: <OrderPreview></OrderPreview>,
          loader: () => fetch('http://localhost:5000/products')
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
