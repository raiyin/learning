import React from 'react';
import { Suspense } from "react";
import TicketList from './TicketList';
import Loading from "../loading";

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

            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    );
}
