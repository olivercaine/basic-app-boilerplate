import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type PieceKind = "Essay" | "Note" | "Letter"
export type PieceStatus = "Draft" | "Published"

export type Piece = {
  id: string
  title: string
  kind: PieceKind
  status: PieceStatus
  excerpt: string
  featured: boolean
  updated: string
}

const seed: Piece[] = [
  {
    id: "morning-light",
    title: "Morning light on the stair",
    kind: "Essay",
    status: "Published",
    excerpt: "A short look at the hour before the house wakes.",
    featured: true,
    updated: "Today",
  },
  {
    id: "unsent-letter",
    title: "A letter left unsent",
    kind: "Letter",
    status: "Draft",
    excerpt: "What I meant to say, and the sentence I keep rewriting.",
    featured: false,
    updated: "Yesterday",
  },
  {
    id: "market-notes",
    title: "Notes from the market",
    kind: "Note",
    status: "Draft",
    excerpt: "Peaches, a blue bowl, and the vendor who remembers names.",
    featured: true,
    updated: "Monday",
  },
  {
    id: "river-path",
    title: "The long way by the river",
    kind: "Essay",
    status: "Published",
    excerpt: "Why the slower walk is the one worth keeping.",
    featured: false,
    updated: "Last week",
  },
]

type NewPiece = Omit<Piece, "id" | "updated">

type PiecesContextValue = {
  pieces: Piece[]
  addPiece: (piece: NewPiece) => void
  publishPiece: (id: string) => void
}

const PiecesContext = createContext<PiecesContextValue | null>(null)

export function PiecesProvider({ children }: { children: ReactNode }) {
  const [pieces, setPieces] = useState<Piece[]>(seed)

  const value = useMemo<PiecesContextValue>(
    () => ({
      pieces,
      addPiece: (piece) => {
        setPieces((current) => [
          {
            ...piece,
            id: crypto.randomUUID(),
            updated: "Just now",
          },
          ...current,
        ])
      },
      publishPiece: (id) => {
        setPieces((current) =>
          current.map((piece) =>
            piece.id === id
              ? { ...piece, status: "Published", updated: "Just now" }
              : piece,
          ),
        )
      },
    }),
    [pieces],
  )

  return (
    <PiecesContext.Provider value={value}>{children}</PiecesContext.Provider>
  )
}

export function usePieces() {
  const context = useContext(PiecesContext)
  if (!context) {
    throw new Error("usePieces must be used within PiecesProvider")
  }
  return context
}
