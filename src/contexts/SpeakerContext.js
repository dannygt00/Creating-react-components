import { createContext } from "react/cjs/react.production.min";

const SpeakerContext = createContext();

function SpeakerProvider({ children, speaker, updateRecord, insertRecord, deleteRecord }) {
    return (
        <SpeakerContext.Provider value={
            { speaker, updateRecord, insertRecord, deleteRecord }
        }>
            {children}
        </SpeakerContext.Provider>
    );
}

export default { SpeakerContext, SpeakerProvider }