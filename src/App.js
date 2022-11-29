import './App.css';
import Download from './Download';
import Table from './Pages/Table';
import TableFour from './Pages/TableFour';
import TableThree from './Pages/TableThree';
import TableTwo from './Pages/TableTow';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto' id="pageToDownload">

      <Table />
      <TableTwo />
      <TableThree />
      <TableFour />
      <div className='my-20 ml-24'>
        <Download
          roofElementId="pageToDownload"
        // downloadFileName={name}
        ></Download>
      </div>
    </div>
  );
}

export default App;
