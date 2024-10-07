import Live from "@/interfaces/live";

declare module "**/lives.json" {
  const data: Live;
  export default data;
}