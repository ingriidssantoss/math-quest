"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash } from "lucide-react";

interface Content {
  id: number;
  title: string;
  description: string;
  content: string;
  links: { title: string; url: string }[];
}

export default function ConteudoPage() {
  const [contents, setContents] = useState<Content[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContent, setCurrentContent] = useState<Content>({
    id: 0,
    title: "",
    description: "",
    content: "",
    links: [{ title: "", url: "" }]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setContents(contents.map(c => 
        c.id === currentContent.id ? currentContent : c
      ));
    } else {
      setContents([...contents, { ...currentContent, id: Date.now() }]);
    }
    setCurrentContent({
      id: 0,
      title: "",
      description: "",
      content: "",
      links: [{ title: "", url: "" }]
    });
    setIsEditing(false);
  };

  const addLink = () => {
    setCurrentContent({
      ...currentContent,
      links: [...currentContent.links, { title: "", url: "" }]
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gerenciar Conteúdo</h1>
        <Button onClick={() => setIsEditing(false)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Conteúdo
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Editar" : "Novo"} Conteúdo</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={currentContent.title}
                onChange={(e) => setCurrentContent({
                  ...currentContent,
                  title: e.target.value
                })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Input
                id="description"
                value={currentContent.description}
                onChange={(e) => setCurrentContent({
                  ...currentContent,
                  description: e.target.value
                })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea
                id="content"
                value={currentContent.content}
                onChange={(e) => setCurrentContent({
                  ...currentContent,
                  content: e.target.value
                })}
                required
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label>Links</Label>
                <Button type="button" variant="outline" onClick={addLink}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {currentContent.links.map((link, index) => (
                <div key={index} className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Título do link"
                    value={link.title}
                    onChange={(e) => {
                      const newLinks = [...currentContent.links];
                      newLinks[index].title = e.target.value;
                      setCurrentContent({
                        ...currentContent,
                        links: newLinks
                      });
                    }}
                  />
                  <Input
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) => {
                      const newLinks = [...currentContent.links];
                      newLinks[index].url = e.target.value;
                      setCurrentContent({
                        ...currentContent,
                        links: newLinks
                      });
                    }}
                  />
                </div>
              ))}
            </div>
            
            <Button type="submit" className="w-full">
              {isEditing ? "Atualizar" : "Criar"} Conteúdo
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contents.map((content) => (
          <Card key={content.id}>
            <CardHeader>
              <CardTitle>{content.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">{content.description}</p>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentContent(content);
                    setIsEditing(true);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => {
                    setContents(contents.filter(c => c.id !== content.id));
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}