import { Feather } from "lucide-react"
import { Link } from "react-router"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { PageHeader } from "@/components/layout/page-header"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item"
import { Progress } from "@/components/ui/progress"
import { usePieces } from "@/state/pieces"

const week = [
  { day: "Mon", pieces: 1 },
  { day: "Tue", pieces: 2 },
  { day: "Wed", pieces: 1 },
  { day: "Thu", pieces: 3 },
  { day: "Fri", pieces: 2 },
  { day: "Sat", pieces: 4 },
  { day: "Sun", pieces: 2 },
]

const chartConfig = {
  pieces: {
    label: "Pieces",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function HomePage() {
  const { pieces } = usePieces()
  const drafts = pieces.filter((piece) => piece.status === "Draft").length
  const published = pieces.filter(
    (piece) => piece.status === "Published",
  ).length
  const featured = pieces.filter((piece) => piece.featured).length
  const weekProgress = Math.round((published / pieces.length) * 100)

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
      <PageHeader
        eyebrow="Overview"
        title="The week, in a few lines."
        description="Drafts you are still turning over, and the pieces you have already sent out."
        action={
          <Button asChild>
            <Link to="/studio">Write a piece</Link>
          </Button>
        }
      />

      <section className="grid gap-4 sm:grid-cols-3">
        <Stat label="Drafts" value={drafts} detail="Still on the desk" />
        <Stat label="Published" value={published} detail="Already sent" />
        <Stat label="Featured" value={featured} detail="Pinned for this week" />
      </section>

      <section className="grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-heading text-2xl tracking-tight normal-case">
              Quiet hours
            </CardTitle>
            <CardDescription>
              Pieces touched across the last seven days.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-56 w-full"
            >
              <AreaChart data={week} margin={{ left: 8, right: 8 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  interval={0}
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  dataKey="pieces"
                  type="monotone"
                  stroke="var(--color-pieces)"
                  fill="var(--color-pieces)"
                  fillOpacity={0.18}
                  strokeWidth={1.5}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-heading text-2xl tracking-tight normal-case">
              On the desk
            </CardTitle>
            <CardDescription>
              {weekProgress}% of the shelf is published.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Progress value={weekProgress} />
            <ItemGroup>
              {pieces.slice(0, 4).map((piece) => (
                <Item key={piece.id} variant="muted">
                  <ItemContent>
                    <ItemTitle>{piece.title}</ItemTitle>
                    <ItemDescription>{piece.excerpt}</ItemDescription>
                  </ItemContent>
                  <Badge variant="secondary">{piece.status}</Badge>
                </Item>
              ))}
            </ItemGroup>
          </CardContent>
        </Card>
      </section>

      <Alert>
        <Feather />
        <AlertTitle>The studio is open</AlertTitle>
        <AlertDescription>
          Write the next piece, or return to one you left unfinished.
        </AlertDescription>
        <AlertAction>
          <Button variant="outline" size="sm" asChild>
            <Link to="/studio">Open studio</Link>
          </Button>
        </AlertAction>
      </Alert>
    </div>
  )
}

function Stat({
  label,
  value,
  detail,
}: {
  label: string
  value: number
  detail: string
}) {
  return (
    <Card size="sm">
      <CardHeader>
        <CardDescription className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
          {label}
        </CardDescription>
        <CardTitle className="font-heading text-4xl tracking-tight normal-case">
          {value}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{detail}</p>
      </CardContent>
    </Card>
  )
}
