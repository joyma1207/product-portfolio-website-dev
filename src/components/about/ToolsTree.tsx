"use client";

export type ToolsTreeNode = {
  label: string;
  children?: readonly ToolsTreeNode[];
};

interface ToolsTreeProps {
  nodes: readonly ToolsTreeNode[];
}

function BranchNode({ node }: { node: ToolsTreeNode }) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="min-w-0">
      <div className="text-sm text-gray-700 py-0.5">{node.label}</div>
      {hasChildren && (
        <div className="pl-3 mt-0.5 space-y-0.5 border-l-2 border-gray-200/80">
          {node.children!.map((child, i) => (
            <div key={`${child.label}-${i}`} className="text-sm text-gray-600">
              {child.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Horizontal tree: roots on top in a row, each root's branches in a column below it.
 */
export function ToolsTree({ nodes }: ToolsTreeProps) {
  return (
    <div className="flex flex-wrap gap-x-12 gap-y-8">
      {nodes.map((node, i) => (
        <div key={`${node.label}-${i}`} className="flex flex-col min-w-0 flex-1 basis-0">
          <div className="font-semibold text-base text-gray-900 tracking-brand mb-2">
            {node.label}
          </div>
          <div className="flex flex-col gap-1.5">
            {node.children?.map((child, j) => (
              <BranchNode key={`${child.label}-${j}`} node={child} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
