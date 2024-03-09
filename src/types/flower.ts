export type Flower = {
  id: string
  flowers: string[]
  spread: string | { id: string, n?: number }
  dominant?: boolean
};
