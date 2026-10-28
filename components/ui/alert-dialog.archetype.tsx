import { defineComponent } from "archetype-os/components";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog";

export default defineComponent({
  key: "alert-dialog",
  name: "Alert Dialog",
  description:
    "Modal confirmation for destructive or irreversible actions (deleting a chat, deleting all chats). Cancel is Outline, the confirm action is Default.",
  code: { import: "@/components/ui/alert-dialog", export: "AlertDialog" },
  properties: {
    Size: { values: ["Default", "Small"], prop: "size", map: { Default: "default", Small: "sm" } },
  },
  height: 480,
  render: ({ Size }) => (
    <AlertDialog open>
      <AlertDialogContent size={Size === "Small" ? "sm" : "default"}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your chat and remove it
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
});
