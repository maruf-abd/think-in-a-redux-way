const initialState = [
    {
        id: 1,
        score: 120,
    }
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_MATCH':
            return [
                ...state,
                {
                    id: action.payload.id,
                    score: action.payload.initialScore,
                }
            ];
        case 'DELETE_MATCH':

            return state.filter((match) => {
                return match.id !== Number(action.payload.id);
            });
        case 'INCREMENT_SCORE':
            return state.map((match) => {
                if (match.id === action.payload.id) {
                    return {
                        ...match,
                        score: match.score + action.payload.newScore,
                    }
                }
                return match;
            });
        case 'DECREMENT_SCORE':
            return state.map((match) => {
                if (match.id === action.payload.id) {
                    let newScore = match.score - action.payload.newScore;
                    if (newScore < 0) {
                        newScore = 0;
                    }

                    return {
                        ...match,
                        score: newScore,
                    }
                }
                return match;
            });
        case 'RESET_SCORE':
            return state.map((match) => {
                return {
                    ...match,
                    score: 0,
                }
            });
        default:
            return state;
    }
}

// create store
const store = Redux.createStore(reducer);

// create action creators
const addNewMatch = (id, initialScore) => {
    return {
        type: 'ADD_NEW_MATCH',
        payload: {
            id,
            initialScore: initialScore,
        }
    }
}

const deleteMatch = (id) => {
    return {
        type: 'DELETE_MATCH',
        payload: {
            id,
        }
    }
}

const incrementScore = (id, newScore) => {
    return {
        type: 'INCREMENT_SCORE',
        payload: {
            id,
            newScore,
        }
    }
}

const decrementScore = (id, newScore) => {
    return {
        type: 'DECREMENT_SCORE',
        payload: {
            id,
            newScore,
        }
    }
}

const resetScore = () => {
    return {
        type: 'RESET_SCORE',
    }
}

// print all matches to the screen when the page loads from the store
const printMatches = () => {
    const matches = store.getState();
    const matchesContainer = document.querySelector('.all-matches');

    matchesContainer.innerHTML = '';

    matches.forEach((match) => {
        matchesContainer.innerHTML += `
            <div class="match">
                <div class="wrapper">
                    <button class="lws-delete" data-match_id="${match.id}">
                        <img src="./image/delete.svg" alt=""/>
                    </button>
                    <h3 class="lws-matchName">Match ${match.id}</h3>
                </div>
                <div class="inc-dec">
                    <form class="incrementForm">
                        <h4>Increment</h4>
                        <input
                            type="number"
                            name="increment"
                            class="lws-increment"
                            data-match_id="${match.id}"
                        />
                    </form>
                    <form class="decrementForm">
                        <h4>Decrement</h4>
                        <input
                            type="number"
                            name="decrement"
                            class="lws-decrement"
                            data-match_id="${match.id}"
                        />
                    </form>
                </div>
                <div class="numbers">
                    <h2 class="lws-singleResult">${match.score}</h2>
                </div>
            </div>
`;
    });
}

// initialize increment score event
const initializeIncrementScoreEvent = () => {
    const incrementInputs = document.querySelectorAll('.lws-increment');

    incrementInputs.forEach((input) => {
        input.addEventListener('blur', (e) => {
            const matchId = Number(e.target.dataset.match_id);
            const newScore = Number(e.target.value);

            store.dispatch(incrementScore(matchId, newScore));
            printMatches();
            initializeDeleteMatchEvent();
            initializeIncrementScoreEvent();
            initializeDecrementScoreEvent();
        });
    });
}

// initialize decrement score event
const initializeDecrementScoreEvent = () => {
    const decrementInputs = document.querySelectorAll('.lws-decrement');

    decrementInputs.forEach((input) => {
        input.addEventListener('blur', (e) => {
            const matchId = Number(e.target.dataset.match_id);
            const newScore = Number(e.target.value);

            store.dispatch(decrementScore(matchId, newScore));
            printMatches();
            initializeDeleteMatchEvent();
            initializeIncrementScoreEvent();
            initializeDecrementScoreEvent();
        });
    });
}

// initialize delete match event
const initializeDeleteMatchEvent = () => {
    const deleteMatchBtns = document.querySelectorAll('.lws-delete');

    deleteMatchBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            console.log(e.target.parentNode.dataset.match_id);
            const matchId = e.target.parentNode.dataset.match_id;

            store.dispatch(deleteMatch(matchId));
            printMatches();
            initializeDeleteMatchEvent();
            initializeIncrementScoreEvent();
            initializeDecrementScoreEvent();
        });
    });
}

printMatches();
initializeDeleteMatchEvent();
initializeIncrementScoreEvent();
initializeDecrementScoreEvent();


// reset all scores
const resetBtn = document.querySelector('#reset-all');
resetBtn.addEventListener('click', () => {
    store.dispatch(resetScore());

    printMatches();
    initializeDeleteMatchEvent();
    initializeIncrementScoreEvent();
    initializeDecrementScoreEvent();
});


// add new match
const addNewMatchBtn = document.querySelector('.lws-addMatch');
addNewMatchBtn.addEventListener('click', () => {
    // get the last match id
    const matches = store.getState();
    const lastMatch = matches[matches.length - 1];
    const newMatchId = lastMatch.id + 1;
    const newMatchInitialScore = 0;

    store.dispatch(addNewMatch(newMatchId, newMatchInitialScore));
    printMatches();
    initializeDeleteMatchEvent();
    initializeIncrementScoreEvent();
    initializeDecrementScoreEvent();
});









