import { useState } from "react"
import { toast } from "sonner"
import { PageHeader } from "@/components/layout/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  usePieces,
  type Piece,
  type PieceKind,
} from "@/state/pieces"

const kinds: PieceKind[] = ["Essay", "Note", "Letter"]

export function StudioPage() {
  const { pieces, addPiece, publishPiece } = usePieces()
  const [title, setTitle] = useState("")
  const [kind, setKind] = useState<PieceKind>("Essay")
  const [excerpt, setExcerpt] = useState("")
  const [featured, setFeatured] = useState(false)
  const [publishNow, setPublishNow] = useState(false)
  const [selected, setSelected] = useState<Piece | null>(null)

  function savePiece() {
    const nextTitle = title.trim()
    if (!nextTitle) {
      toast.error("Give the piece a title first.")
      return
    }

    addPiece({
      title: nextTitle,
      kind,
      excerpt: excerpt.trim() || "A new piece, still finding its shape.",
      featured,
      status: publishNow ? "Published" : "Draft",
    })
    setTitle("")
    setExcerpt("")
    setFeatured(false)
    setPublishNow(false)
    toast.success("Saved to the desk.")
  }

  function publishSelected() {
    if (!selected) return
    publishPiece(selected.id)
    setSelected(null)
    toast.success("Marked as published.")
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
      <PageHeader
        eyebrow="Studio"
        title="Write, then set it down."
        description="A short form for the next piece, and the shelf of everything already started."
      />

      <Tabs defaultValue="compose">
        <TabsList variant="line">
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="library">Library</TabsTrigger>
        </TabsList>

        <TabsContent value="compose" className="pt-8">
          <FieldGroup className="max-w-xl gap-8">
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input
                id="title"
                value={title}
                placeholder="Morning light on the stair"
                onChange={(event) => setTitle(event.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="kind">Kind</FieldLabel>
              <Select
                value={kind}
                onValueChange={(value) => setKind(value as PieceKind)}
              >
                <SelectTrigger id="kind" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {kinds.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldDescription>
                Essay, note, or letter. It only changes the shelf label.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="excerpt">Opening line</FieldLabel>
              <Textarea
                id="excerpt"
                value={excerpt}
                placeholder="The first sentence you do not want to lose."
                onChange={(event) => setExcerpt(event.target.value)}
              />
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="featured"
                checked={featured}
                onCheckedChange={(value) => setFeatured(value === true)}
              />
              <FieldLabel htmlFor="featured">Feature on the overview</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Switch
                id="publish"
                checked={publishNow}
                onCheckedChange={setPublishNow}
              />
              <div>
                <FieldLabel htmlFor="publish">Publish now</FieldLabel>
                <FieldDescription>
                  Leave this off to keep the piece as a draft.
                </FieldDescription>
              </div>
            </Field>
            <Button type="button" onClick={savePiece}>
              Save piece
            </Button>
          </FieldGroup>
        </TabsContent>

        <TabsContent value="library" className="pt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Kind</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right"> </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pieces.map((piece) => (
                <TableRow key={piece.id}>
                  <TableCell className="font-medium">{piece.title}</TableCell>
                  <TableCell>{piece.kind}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{piece.status}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {piece.updated}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelected(piece)}
                    >
                      Open
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-heading text-3xl tracking-tight normal-case">
              {selected?.title}
            </DialogTitle>
            <DialogDescription>{selected?.excerpt}</DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 text-sm text-muted-foreground">
            <span>{selected?.kind}</span>
            <span>{selected?.status}</span>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelected(null)}>
              Close
            </Button>
            <Button
              onClick={publishSelected}
              disabled={selected?.status === "Published"}
            >
              Publish
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
