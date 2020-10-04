import React, {
  useState,
  ChangeEvent,
  useEffect,
  FormEvent,
  useRef,
} from "react";
import { motion, useMotionValue } from "framer-motion";

interface TextNodeItemProps {
  textNode: TextNode;
  toggleTextNode: ToggleTextNode;
  setTextNodePriority: SetTextNodePriority;
  setTextNodeText: SetTextNodeText;
  deleteTextNode: DeleteTextNode;

  setPosition: any;
  moveItem: any;
  i: number;
}

export const TextNodeItem: React.FC<TextNodeItemProps> = ({
  textNode,
  toggleTextNode,
  setTextNodePriority,
  setTextNodeText,
  deleteTextNode,

  setPosition,
  moveItem,
  i,
}) => {
  //set textNode.priority as local state - priority in initiation
  const [priority, setPriority] = useState(textNode.priority);
  const [text, setText] = useState(textNode.text);
  const [isDragging, setDragging] = useState(false);

  // We'll use a `ref` to access the DOM element that the `motion.li` produces.
  // This will allow us to measure its height and position, which will be useful to
  // decide when a dragging element should switch places with its siblings.
  const ref = useRef<any>(null);

  // By manually creating a reference to `dragOriginY` we can manipulate this value
  // if the user is dragging this DOM element while the drag gesture is active to
  // compensate for any movement as the items are re-positioned.
  const dragOriginY = useMotionValue(0);

  // Update the measured position of the item so we can calculate when we should rearrange.
  useEffect(() => {
    setPosition(i, {
      height: ref.current.offsetHeight,
      top: ref.current.offsetTop,
    });
  });
  const onTop = { zIndex: 1 };
  const flat = {
    zIndex: 0,
    transition: { delay: 0.3 },
  };

  //every time the select value change, set the textNode.priority to the new value

  const handlePriority = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriority(Number(e.target.value));
  };
  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleDelete = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteTextNode(textNode);
  };

  useEffect(() => {
    setTextNodePriority(textNode, priority);
  }, [priority]);

  useEffect(() => {
    setTextNodeText(textNode, text);
  }, [text]);

  return (
    <motion.li
      className="textNode"
      ref={ref}
      initial={false}
      // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
      animate={isDragging ? onTop : flat}
      /*    style={{ background: "pink", height: heights }} */
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      drag="y"
      dragOriginY={dragOriginY}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={1}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onDrag={(e, { point }) => moveItem(i, point.y)}
      positionTransition={({ delta }) => {
        if (isDragging) {
          // If we're dragging, we want to "undo" the items movement within the list
          // by manipulating its dragOriginY. This will keep the item under the cursor,
          // even though it's jumping around the DOM.
          dragOriginY.set(dragOriginY.get() + delta.y);
        }

        // If `positionTransition` is a function and returns `false`, it's telling
        // Motion not to animate from its old position into its new one. If we're
        // dragging, we don't want any animation to occur.
        return !isDragging;
      }}
    >
      <form className="textNode__form" id="textNode">
        <input
          type="checkbox"
          checked={textNode.complete}
          onChange={() => toggleTextNode(textNode)}
        ></input>
        <textarea
          className="textNodeText"
          value={text}
          onChange={handleText}
        ></textarea>
        <select
          onChange={handlePriority}
          name="text-node"
          id="text-node-select"
          value={priority}
        >
          <option value="1">High 😨</option>
          <option value="2">Normal 😉</option>
          <option value="3">Low 🤤</option>
        </select>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </motion.li>
  );
};
