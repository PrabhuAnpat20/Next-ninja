import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import CreateTicket from "./create/page";

function Ticket() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
<CreateTicket/>
    </main>
  );
}

export default Ticket;
