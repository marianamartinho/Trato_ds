"use client";
import { AlertCircle, ArrowUpRight, MessageQuestionCircle, User03 } from "@/components/icons";
import { Button, Card, CardHeader, QuickAction, SegmentedBar, Select, Stat, StatGroup, Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, Section } from "@/components/docs/doc";

export default function DashboardPattern() {
  return (
    <>
      <Section title="Operational Overview" description="Composición del Dashboard final (New Dashboard · 2213:30245) usando solo componentes del DS.">
        <Preview align="stretch" canvas="canvas" className="p-lg md:p-3xl">
          <div className="flex flex-col gap-xl">
            <div className="flex flex-wrap items-center gap-md">
              <h1 className="mr-auto text-display-xs font-semibold text-(--text-primary)">Dashboard</h1>
              <Button variant="soft"><MessageQuestionCircle /> Trato agent</Button>
              <Tabs defaultValue="overview"><TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="reports">Reports</TabsTrigger></TabsList></Tabs>
            </div>
            <StatGroup>
              <Stat label="Avg. time to sign" info value="10 days" delta={{ value: "12%", trend: "down", positive: true, caption: "vs last month" }} />
              <Stat label="Avg. negotiation time" info value="12 days" delta={{ value: "12%", trend: "down", positive: true, caption: "vs last month" }} />
              <div className="flex flex-col gap-md">
                <span className="text-sm text-(--text-tertiary)">Expiring soon</span>
                <a href="#" className="inline-flex items-center gap-sm text-md font-medium text-orange-600 underline underline-offset-4"><AlertCircle className="size-4" /> 5 contracts this month</a>
              </div>
              <Stat label="Request-to-contract rate" info value="74%" />
              <Stat label="Signed this month" value="123" />
            </StatGroup>
            <div className="grid gap-xl lg:grid-cols-2">
              <Card className="flex flex-col">
                <CardHeader title="Operational Overview" action={<Select size="sm" defaultValue="me" options={[{ value: "me", label: "Me" }, { value: "team", label: "Team" }]} />} />
                <div className="mb-md flex items-center gap-lg text-13 font-medium text-(--text-tertiary)">Pending Actions <span className="h-px flex-1 bg-(--border-secondary)" /><span className="text-md text-(--text-primary)">147</span></div>
                <div className="mb-xl grid grid-cols-2 gap-md">
                  <QuickAction label="Assigned approval" count={13} />
                  <QuickAction label="Grabbed requests" count={34} />
                  <QuickAction label="Contract signature" count={5} />
                  <QuickAction label="Contract approval" count={32} />
                </div>
                <Button variant="secondary" className="mt-auto w-full">Open operational view <ArrowUpRight /></Button>
              </Card>
              <div className="flex flex-col gap-xl">
                <Card>
                  <CardHeader title="Lifecycle" action={<Tabs defaultValue="c"><TabsList><TabsTrigger value="c" className="h-7 text-xs">Contracts</TabsTrigger><TabsTrigger value="r" className="h-7 text-xs">Requests</TabsTrigger></TabsList></Tabs>} />
                  <p className="mb-lg text-display-xs font-semibold text-(--text-primary)">245 <span className="text-sm font-normal text-(--text-tertiary)">in progress</span></p>
                  <SegmentedBar segments={[
                    { label: "Draft", value: 31, color: "var(--color-gray-400)" },
                    { label: "Negotiation", value: 12, color: "var(--color-yellow-300)" },
                    { label: "Approval", value: 24, color: "var(--color-blue-light-400)" },
                    { label: "Signing", value: 8, color: "var(--color-success-500)" },
                  ]} />
                </Card>
                <Card>
                  <CardHeader title="Contracts by type" action={<Button variant="link" size="sm">View more</Button>} />
                  {[["Service agreement", 24], ["NDA", 19], ["Employment", 17]].map(([l, v]) => (
                    <div key={l} className="mb-md flex items-center gap-lg">
                      <span className="h-5 rounded-sm bg-gray-blue-100 px-md text-xs leading-5 text-gray-blue-600 dark:bg-gray-blue-900 dark:text-gray-blue-200" style={{ width: `${(v as number) * 3.4}%` }}>{l}</span>
                      <span className="ml-auto text-xs text-(--text-quaternary)">{v}</span>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          </div>
        </Preview>
      </Section>
      <Section title="Reglas">
        <Guidelines items={["KPIs arriba, acciones pendientes a la izquierda, análisis a la derecha.", "“Trato agent” abre el chat IA en un drawer: no navega fuera del dashboard.", "Vencimientos próximos en naranja con subrayado: son un link a la lista filtrada."]} />
      </Section>
    </>
  );
}
