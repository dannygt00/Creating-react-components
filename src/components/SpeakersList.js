import Speaker from "./Speaker";
import useRequestSpeakers, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import ReactPlaceholder from "react-placeholder/lib";

function SpeakersList({ showSessions }) {

    const {
        speakersData,
        requestStatus,
        error,
        onFavoriteToggle,
    } = useRequestSpeakers(2000);


    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div className="text-danger">
                Error: <b>loading Speaker Data failed {error}</b>
            </div>
        )
    }

    // if (isLoading === true) return <div>Loading...</div>

    return (
        <div className="container speakers-list">
            <ReactPlaceholder
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={requestStatus === REQUEST_STATUS.SUCCESS}>
                <div className="row">
                    {speakersData.map(function (speaker) {
                        return (
                            <Speaker
                                key={speaker.id}
                                speaker={speaker}
                                showSessions={showSessions}
                                onFavoriteToggle={() => {
                                    onFavoriteToggle(speaker.id);
                                }}
                            />
                        );
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    );
}

export default SpeakersList;