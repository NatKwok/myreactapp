import Box from '@mui/material/Box';

function about() {
    return <Box
    sx={{
      bgcolor: 'text.secondary',
      color: 'primary.contrastText',
      p: 2,
    }}
  >
    <h1 style={{textAlign: "center"}}>About Us</h1>;
    </Box>
};

export default about;