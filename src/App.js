import React,{useState} from 'react';
import AreaSelector from './AreaSelector';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [content, setContent] = useState("");
  return (
    <React.Fragment>
      <AppBar style={{ position: 'relative', backgroundColor: 'blue' }}>
        <Toolbar>
          <Typography variant="h6" style={{ marginLeft: '2px', flex: 1 }}>
            India (Please Select the State)
            <button type="button" class="btn btn-warning ms-4" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
              {content ?  content : "States"}
            </button>
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container maxWidth="md">
        <AreaSelector setContent={setContent}/>
      </Container>
    </React.Fragment>
  );
}

export default App;
