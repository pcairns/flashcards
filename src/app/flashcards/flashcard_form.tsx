import {Flashcard} from './flashcard';

interface FlashcardFormProps {
    flashcard: Flashcard
    setFlashCard: any
    guess: string
    changeGuessHandler: any
    nextCardHandler: any
}

function FlashcardForm(props: FlashcardFormProps) {

    const {flashcard, setFlashCard,  guess, changeGuessHandler, nextCardHandler} = props;

    return (
        <div className="w-96 border-2 rounded-lg border-rose-500 justify-center px-2 mb-2">
             {flashcard.result === false &&
                <div className="bg-red-300  w-full block place-content-center px-2 my-2 rounded-lg border-rose-900">
                    <p className="text-2xl text-center">WRONG</p>
                </div>
            }
            <div className="block">
                <p className="text-9xl text-center">{ flashcard.text }</p>
            </div>
            <div className="w-full block place-content-center px-2 mb-2">

                <input className="w-full form-input text-center text-3xl rounded-lg" type="text" value={ guess } onChange={event => {
                    changeGuessHandler(event.target.value);
                }}/>
            </div>
            <div className="block w-full px-2 mb-2">
                <button className="w-full text-3xl text-center rounded-lg ring-2 ring-blue-500" onClick={event => {
                    if (flashcard.validate(guess)) {
                       changeGuessHandler("");
                       nextCardHandler()
                    } else {
                        console.log("no");
                        setFlashCard(flashcard);
                        changeGuessHandler("");
                    }

                }}>Submit</button>
            </div>
        </div>
    );

}

export default FlashcardForm

