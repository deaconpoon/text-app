type TextNode = {
  text: string;
  complete: boolean;
  priority: number;
};

type ToggleTextNode = (selectedTextNode: TextNode) => void;

type AddTextNode = (newTextNode: string) => void;

type SetTextNodePriority = (
  selectedTextNode: TextNode,
  priority: number
) => void;
