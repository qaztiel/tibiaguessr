// https://react-bootstrap.github.io/components/buttons/

import Button from 'react-bootstrap/Button';


export function GuessButton() {
    function handleGuess(e) {
        e.preventDefault();
        alert('You clicked submit')
      }

    return (
        <div className='d-grid gap-2'>
            <Button 
                variant='primary'
                size='lg'
                onClick={handleGuess}
            >
                Guess
            </Button>
        </div>
        
    )
}