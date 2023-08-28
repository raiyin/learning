import React from 'react';
import TicketList from './TicketList';

export default function Tickets() {
    return (
        <main>
            <nav>
                <h2>Tickets</h2>
                <p>
                    <small>
                        Currently open tickets.
                    </small>
                </p>
            </nav>

            <TicketList />
        </main>
    );
}
