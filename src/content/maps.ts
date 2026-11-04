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
import SelectDoc from "./components/select";
import CheckboxDoc from "./components/checkbox";
import RadioDoc from "./components/radio";
import ToggleDoc from "./components/toggle";
import TextareaDoc from "./components/textarea";
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
import DotDoc from "./components/dot";
import MapMarkerDoc from "./components/map-marker";
import FeaturedIconDoc from "./components/featured-icon";
import LogomarkDoc from "./components/logomark";
import ToastDoc from "./components/toast";
import SectionHeaderDoc from "./components/section-header";
import PageHeaderDoc from "./components/page-header-component";
import BreadcrumbsDoc from "./components/breadcrumbs";
import PaginationDoc from "./components/pagination";
import FiltersBarDoc from "./components/filters-bar";
import ContractsFilterDoc from "./components/contracts-filter";
import UploadFieldDoc from "./components/upload-field";
import ContactDoc from "./components/contact";
import MessageDoc from "./components/message";
import ChatPanelDoc from "./components/chat-panel";
import DrawerDoc from "./components/drawer";
import HeaderBarDoc from "./components/header-bar";
import EditorToolbarDoc from "./components/editor-toolbar";
import ChartsDoc from "./components/charts";
import CalendarDoc from "./components/calendar";
import VideoPlayerDoc from "./components/video-player";
import DashboardPattern from "./patterns/dashboard";
import AiChatPattern from "./patterns/ai-chat";

export const foundationPages: Record<string, ComponentType> = {
  colors: Colors, typography: Typography, spacing: Spacing, elevation: Elevation, icons: Icons, voice: Voice,
};

export const componentPages: Record<string, ComponentType> = {
  button: ButtonDoc, badge: BadgeDoc, input: InputDoc, select: SelectDoc,
  checkbox: CheckboxDoc, radio: RadioDoc, toggle: ToggleDoc, textarea: TextareaDoc, tabs: TabsDoc, avatar: AvatarDoc, tooltip: TooltipDoc, alert: AlertDoc,
  dialog: DialogDoc, menu: MenuDoc, table: TableDoc, "card-stat": CardStatDoc, "empty-state": EmptyStateDoc,
  progress: ProgressDoc, chip: ChipDoc, navigation: NavigationDoc,
  "dot": DotDoc, "map-marker": MapMarkerDoc, "featured-icon": FeaturedIconDoc, "logomark": LogomarkDoc, "toast": ToastDoc, "section-header": SectionHeaderDoc, "page-header-component": PageHeaderDoc,
  "breadcrumbs": BreadcrumbsDoc, "pagination": PaginationDoc, "filters-bar": FiltersBarDoc, "contracts-filter": ContractsFilterDoc, "upload-field": UploadFieldDoc, "contact": ContactDoc,
  "message": MessageDoc, "chat-panel": ChatPanelDoc, "drawer": DrawerDoc, "header-bar": HeaderBarDoc, "editor-toolbar": EditorToolbarDoc,
  charts: ChartsDoc, calendar: CalendarDoc, "video-player": VideoPlayerDoc,
};

export const patternPages: Record<string, ComponentType> = {
  dashboard: DashboardPattern, "ai-chat": AiChatPattern,
};
