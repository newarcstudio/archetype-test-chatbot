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
    "Modal confirmation over a dark blurred scrim. Used before deleting a chat or all chats: title, one-sentence consequence, Cancel (outline) and Continue.",
  code: { import: "@/components/ui/alert-dialog", export: "AlertDialog" },
  properties: {
    Content: ["Delete chat", "Delete all"],
  },
  width: 1024,
  height: 600,
  render: ({ Content }) => (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {Content === "Delete all" ? "Delete all chats?" : "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {Content === "Delete all"
              ? "This action cannot be undone. This will permanently delete all your chats and remove them from our servers."
              : "This action cannot be undone. This will permanently delete your chat and remove it from our servers."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>{Content === "Delete all" ? "Delete All" : "Continue"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
});
