import logo from './logo.svg';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';

//  And there is similar lib which is used with react bootstap table
//  "react-bootstrap-table2-filter": "1.3.3",
//  "react-bootstrap-table2-paginator": "2.1.2",
//   etc..,

function App() {

  const columns = [{
    dataField: 'workobjectname',
    text: 'WorkObjectName',
    sort: true,
  },
  {
    dataField: 'project_name',
    text: 'ProjectName'
  },
  {
    dataField: 'projectType',
    text: 'projectType'
  },
  {
    dataField: 'process_name',
    text: 'processName'
  },
  {
    dataField: 'WorkobjectStartDate',
    text: 'WorkobjectStartDate'
  },
  {
    dataField: 'WorkobjectDueDate',
    text: 'WorkobjectDueDate'
  }];

  const products = [{
    workobjectname: "val1.workobjectname",
    project_name: "val1.project_name",
    projectType: "val1.projectType",
    process_name: "val1.infoJSON[0].process_name",
    WorkobjectStartDate: "val1.WorkobjectStartDate",
    WorkobjectDueDate: "val1.WorkobjectDueDate"
  },
  {
    workobjectname: "val1.workobjectname",
    project_name: "val1.project_name",
    projectType: "val1.projectType",
    process_name: "val1.infoJSON[0].process_name",
    WorkobjectStartDate: "val1.WorkobjectStartDate",
    WorkobjectDueDate: "val1.WorkobjectDueDate"
  },
  {
    workobjectname: "val1.workobjectname",
    project_name: "val1.project_name",
    projectType: "val1.projectType",
    process_name: "val1.infoJSON[0].process_name",
    WorkobjectStartDate: "val1.WorkobjectStartDate",
    WorkobjectDueDate: "val1.WorkobjectDueDate"
  }];

  const rowStyle = {
    style: {
      backgroundColor: "#c8e6c9",
      border: "10px solid black",
      padding: "25px",
    },
  }

  return (
    <div className="App">

      <BootstrapTable
        keyField='id'
        data={products || []}
        columns={columns}
        striped
        sort={true}
        headerClasses="fw-bold headerStyle"

        rowStyle={rowStyle}
        responsive
        bordered={false}
        rowClasses="columnStyle"
        noDataIndication="no data found"
      />
    </div>
  );
}

export default App;
