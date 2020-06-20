export const loadBuildings = buildings => ({
    type: 'LOAD_BUILDINGS',
    buildings,
});

export const navigate = currentView => ({
    type: 'NAVIGATE',
    currentView,
});

export const showNavToggle = toggle => ({
    type: 'SHOW_NAV',
    toggle,
});

export const conversationCount = count => ({
    type: 'CONVERSATION_COUNT',
    count,
});