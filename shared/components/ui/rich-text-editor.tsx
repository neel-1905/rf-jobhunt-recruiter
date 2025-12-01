"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import { cn } from "@/shared/lib/utils";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
  Quote,
  Minus,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  RemoveFormatting,
  ChevronDown,
  Palette,
} from "lucide-react";
import { useCallback, useState } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

interface RichTextEditorProps {
  content?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  className?: string;
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const [showTextFormatMenu, setShowTextFormatMenu] = useState(false);
  const [showAlignMenu, setShowAlignMenu] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const textFormatRef = useClickOutside(() => setShowTextFormatMenu(false));
  const alignMenuRef = useClickOutside(() => setShowAlignMenu(false));
  const colorPickerRef = useClickOutside(() => setShowColorPicker(false));

  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;

    const url = window.prompt("Image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const getActiveTextFormat = () => {
    if (!editor) return "Normal text";
    if (editor.isActive("heading", { level: 1 })) return "Heading 1";
    if (editor.isActive("heading", { level: 2 })) return "Heading 2";
    if (editor.isActive("heading", { level: 3 })) return "Heading 3";
    return "Normal text";
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-input bg-background p-2 flex flex-wrap gap-1 items-center">
      {/* Undo/Redo */}
      <div className="flex gap-0.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        >
          <Undo className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        >
          <Redo className="size-4" />
        </ToolbarButton>
      </div>

      <Separator />

      {/* Text Format Dropdown */}
      <div className="relative" ref={textFormatRef}>
        <ToolbarButton
          onClick={() => setShowTextFormatMenu(!showTextFormatMenu)}
          className="min-w-[120px] justify-between"
        >
          <span className="text-xs">{getActiveTextFormat()}</span>
          <ChevronDown className="size-3" />
        </ToolbarButton>
        {showTextFormatMenu && (
          <div className="absolute top-full left-0 mt-1 bg-background border border-input rounded-md shadow-lg z-10 min-w-[120px]">
            <DropdownItem
              onClick={() => {
                editor.chain().focus().setParagraph().run();
                setShowTextFormatMenu(false);
              }}
            >
              Normal text
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 1 }).run();
                setShowTextFormatMenu(false);
              }}
            >
              Heading 1
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();
                setShowTextFormatMenu(false);
              }}
            >
              Heading 2
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 3 }).run();
                setShowTextFormatMenu(false);
              }}
            >
              Heading 3
            </DropdownItem>
          </div>
        )}
      </div>

      <Separator />

      {/* Alignment Dropdown */}
      <div className="relative" ref={alignMenuRef}>
        <ToolbarButton onClick={() => setShowAlignMenu(!showAlignMenu)}>
          {editor.isActive({ textAlign: "left" }) && (
            <AlignLeft className="size-4" />
          )}
          {editor.isActive({ textAlign: "center" }) && (
            <AlignCenter className="size-4" />
          )}
          {editor.isActive({ textAlign: "right" }) && (
            <AlignRight className="size-4" />
          )}
          {editor.isActive({ textAlign: "justify" }) && (
            <AlignJustify className="size-4" />
          )}
          {!editor.isActive({ textAlign: "left" }) &&
            !editor.isActive({ textAlign: "center" }) &&
            !editor.isActive({ textAlign: "right" }) &&
            !editor.isActive({ textAlign: "justify" }) && (
              <AlignLeft className="size-4" />
            )}
          <ChevronDown className="size-3 ml-1" />
        </ToolbarButton>
        {showAlignMenu && (
          <div className="absolute top-full left-0 mt-1 bg-background border border-input rounded-md shadow-lg z-10">
            <DropdownItem
              onClick={() => {
                editor.chain().focus().setTextAlign("left").run();
                setShowAlignMenu(false);
              }}
            >
              <AlignLeft className="size-4 mr-2" />
              Left
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                editor.chain().focus().setTextAlign("center").run();
                setShowAlignMenu(false);
              }}
            >
              <AlignCenter className="size-4 mr-2" />
              Center
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                editor.chain().focus().setTextAlign("right").run();
                setShowAlignMenu(false);
              }}
            >
              <AlignRight className="size-4 mr-2" />
              Right
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                editor.chain().focus().setTextAlign("justify").run();
                setShowAlignMenu(false);
              }}
            >
              <AlignJustify className="size-4 mr-2" />
              Justify
            </DropdownItem>
          </div>
        )}
      </div>

      <Separator />

      {/* Text Color Picker */}
      <div className="relative" ref={colorPickerRef}>
        <ToolbarButton
          onClick={() => setShowColorPicker(!showColorPicker)}
          title="Text color"
        >
          <Palette className="size-4" />
        </ToolbarButton>
        {showColorPicker && (
          <div className="absolute top-full left-0 mt-1 bg-background border border-input rounded-md shadow-lg z-10 p-3 min-w-[180px]">
            <div className="grid grid-cols-5 gap-2">
              {[
                "#000000",
                "#374151",
                "#6B7280",
                "#EF4444",
                "#F59E0B",
                "#10B981",
                "#3B82F6",
                "#8B5CF6",
                "#EC4899",
                "#F97316",
              ].map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => {
                    editor.chain().focus().setColor(color).run();
                    setShowColorPicker(false);
                  }}
                  className="size-7 rounded border border-input hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                editor.chain().focus().unsetColor().run();
                setShowColorPicker(false);
              }}
              className="w-full mt-2 px-2 py-1.5 text-xs border border-input rounded hover:bg-accent"
            >
              Reset Color
            </button>
          </div>
        )}
      </div>

      <Separator />

      {/* Text Formatting */}
      <div className="flex gap-0.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          title="Bold"
        >
          <Bold className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          title="Italic"
        >
          <Italic className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
          title="Underline"
        >
          <UnderlineIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
          title="Strikethrough"
        >
          <Strikethrough className="size-4" />
        </ToolbarButton>
      </div>

      <Separator />

      {/* Clear Formatting */}
      <ToolbarButton
        onClick={() =>
          editor.chain().focus().clearNodes().unsetAllMarks().run()
        }
        title="Clear formatting"
      >
        <RemoveFormatting className="size-4" />
      </ToolbarButton>

      <Separator />

      {/* Lists */}
      <div className="flex gap-0.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          title="Bullet list"
        >
          <List className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          title="Numbered list"
        >
          <ListOrdered className="size-4" />
        </ToolbarButton>
      </div>

      <Separator />

      {/* Insert */}
      <div className="flex gap-0.5">
        <ToolbarButton
          onClick={setLink}
          isActive={editor.isActive("link")}
          title="Link"
        >
          <LinkIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton onClick={addImage} title="Image">
          <ImageIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
          title="Code"
        >
          <Code className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
          title="Quote"
        >
          <Quote className="size-4" />
        </ToolbarButton>
      </div>

      <Separator />

      {/* Horizontal Rule */}
      <ToolbarButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        title="Horizontal line"
      >
        <Minus className="size-4" />
      </ToolbarButton>
    </div>
  );
};

const ToolbarButton = ({
  onClick,
  disabled,
  isActive,
  children,
  className,
  title,
}: {
  onClick?: () => void;
  disabled?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={cn(
        "p-1.5 rounded hover:bg-accent transition-colors flex items-center",
        isActive && "bg-accent",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

const DropdownItem = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-3 py-2 text-xs hover:bg-accent transition-colors flex items-center"
    >
      {children}
    </button>
  );
};

const Separator = () => {
  return <div className="w-px h-6 bg-border mx-1" />;
};

const RichTextEditor = ({
  content = "",
  onChange,
  placeholder = "Start typing...",
  className,
}: RichTextEditorProps) => {
  const [editorKey, setEditorKey] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
      setEditorKey((prev) => prev + 1); // Force re-render of MenuBar
    },
    onSelectionUpdate: () => {
      setEditorKey((prev) => prev + 1); // Force re-render of MenuBar
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm max-w-none focus:outline-none min-h-[200px] max-h-[300px] overflow-y-auto p-4",
          "prose-headings:font-semibold prose-p:my-2 prose-p:text-[13px]",
          "prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:text-[13px]",
          "prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:text-[13px]",
          "prose-code:bg-accent prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-[13px]",
          "prose-a:text-primary prose-a:underline prose-a:text-[13px]",
          "text-[13px]"
        ),
      },
    },
  });

  return (
    <div
      className={cn(
        "border border-input rounded-primary bg-background",
        className
      )}
    >
      <MenuBar editor={editor} key={editorKey} />
      <EditorContent editor={editor} placeholder={placeholder} />
    </div>
  );
};

export default RichTextEditor;
