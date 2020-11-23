async function fetchGraphQL(text, variables) {
    // Fetch data from GraphQL API:
    const response = await fetch(process.env.REACT_APP_BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });

    // Get the response as JSON
    return await response.json();
  }

export default fetchGraphQL;
