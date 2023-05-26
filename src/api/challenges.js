// Challenges api - CRUD operations for challenges

// # create - create a new challenge
async function createChallenge(challengeData) {
    const response = await fetch('https://example.com/api/challenges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(challengeData)
    });
    const data = await response.json();
    return data;
  }

// # read
async function getNewChallenge() {
    const response = await fetch('https://example.com/api/challenges');
    const data = await response.json();
    return data;
  }

// # update
async function updateChallenge(challengeId, challengeData) {
    const response = await fetch(`https://example.com/api/challenges/${challengeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(challengeData)
    });
    const data = await response.json();
    return data;
  }

// # delete
async function deleteChallenge(challengeId) {
    const response = await fetch(`https://example.com/api/challenges/${challengeId}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  }