// https://react-bootstrap.github.io/components/buttons/

import Button from 'react-bootstrap/Button';


export function GuessButton() {
    function handleGuess(e) {
        e.preventDefault();
        alert('You clicked submit')
      }

    return (
        <Button 
            className='footer--btn' 
            onClick={handleGuess}
        >
            Guess
        </Button>
    )
}