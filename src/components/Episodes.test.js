import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';
// import userEvent from '@testing-library/user-event';


test('Episodes render', ()=> {
    render(<Episodes 
        episodes={[{
        season: 12,
        id: 1324,
        number: 32,
        name:'Jacob',
        summary: 'Test',
        runtime:'1 Hour'
    }]} />)
    
    const episodes = screen.getByText(/season 12/i);
    expect(episodes).toBeInTheDocument();
});
