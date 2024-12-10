import { createConsumer } from "@rails/actioncable";

export const cable = createConsumer("http://localhost:3000/cable");
