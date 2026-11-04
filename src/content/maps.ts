import type { ComponentType } from "react";
import Colors from "./foundations/colors";
import Typography from "./foundations/typography";
import Spacing from "./foundations/spacing";
import Elevation from "./foundations/elevation";
import Icons from "./foundations/icons";
import Voice from "./foundations/voice";
import ButtonDoc from "./components/button";
import BadgeDoc from "./components/badge";
import InputDoc from "./components/input";
import SearchDoc from "./components/search";
import SelectDoc from "./components/select";
import CheckboxSwitchDoc from "./components/checkbox-switch";
import TabsDoc from "./components/tabs";
import AvatarDoc from "./components/avatar";
import TooltipDoc from "./components/tooltip";
import AlertDoc from "./components/alert";
import DialogDoc from "./components/dialog";
import MenuDoc from "./components/menu";
import TableDoc from "./components/table";
import CardStatDoc from "./components/card-stat";
import EmptyStateDoc from "./components/empty-state";
import ProgressDoc from "./components/progress";
import ChipDoc from "./components/chip";
import NavigationDoc from "./components/navigation";
import PageHeaderPattern from "./patterns/page-header";
import DocumentsTablePattern from "./patterns/documents-table";
import DashboardPattern from "./patterns/dashboard";
import AiChatPattern from "./patterns/ai-chat";

export const foundationPages: Record<string, ComponentType> = {
  colors: Colors, typography: Typography, spacing: Spacing, elevation: Elevation, icons: Icons, voice: Voice,
};

export const componentPages: Record<string, ComponentType> = {
  button: ButtonDoc, badge: BadgeDoc, input: InputDoc, search: SearchDoc, select: SelectDoc,
  "checkbox-switch": CheckboxSwitchDoc, tabs: TabsDoc, avatar: AvatarDoc, tooltip: TooltipDoc, alert: AlertDoc,
  dialog: DialogDoc, menu: MenuDoc, table: TableDoc, "card-stat": CardStatDoc, "empty-state": EmptyStateDoc,
  progress: ProgressDoc, chip: ChipDoc, navigation: NavigationDoc,
};

export const patternPages: Record<string, ComponentType> = {
  "page-header": PageHeaderPattern, "documents-table": DocumentsTablePattern, dashboard: DashboardPattern, "ai-chat": AiChatPattern,
};
