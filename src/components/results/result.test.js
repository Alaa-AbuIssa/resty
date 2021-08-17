import Results from "./index";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('pokimon Render', () => {
    const data = {
        "Headers": {
            "cache-control": 'string no-cache'

        },
        "results": [
            {
                "name": "caterpie",
                "url": "https://pokeapi.co/api/v2/pokemon/10/"
            },
            {

            
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
            },
        ]
    };

    render(<Results data={data} />);
    const items = screen.getByTestId('testResult');
    expect(items).toHaveTextContent(
        `HeadersResult[ { "name": "caterpie", "url": "https://pokeapi.co/api/v2/pokemon/10/" }, { "name": "pidgeotto", "url": "https://pokeapi.co/api/v2/pokemon/17/" } ]`
    );
    expect(items).toHaveTextContent('pidgeotto');
});

