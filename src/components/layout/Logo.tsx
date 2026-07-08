import { FolderKanban } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 px-6 py-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
        <FolderKanban className="h-6 w-6 text-white" />
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">
          FlowTask
        </h1>

        <p className="text-xs text-slate-400">
          Project Manager
        </p>
      </div>
    </div>
  );
}