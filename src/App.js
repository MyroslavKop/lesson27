import Header from "./components/Header";
import Form from "./components/form/Form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



function App() {
    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{maxWidth: 685}}>
                    <Header/>
                    <Form/>
                </Box>
            </Container>
        </>
    );
}

export default App;
