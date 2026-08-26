"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { models } from "@/lib/models";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const body = [
      `Nom : ${data.get("name") ?? ""}`,
      `Téléphone : ${data.get("phone") ?? ""}`,
      `E-mail : ${data.get("email") ?? ""}`,
      `Modèle : ${data.get("model") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Demande JETOUR RDC",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-border bg-card p-8">
        <p className="font-display text-2xl tracking-[0.12em] text-black">
          Demande enregistrée
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Votre client e-mail va s’ouvrir pour envoyer le message à{" "}
          {site.distributor.name}. Vous pouvez aussi appeler le {site.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-2">
        <Label htmlFor="name">Nom complet</Label>
        <Input id="name" name="name" required placeholder="Votre nom" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+243 …"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.com"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="model">Modèle</Label>
        <select
          id="model"
          name="model"
          defaultValue=""
          className="h-12 rounded-none border border-input bg-white px-4 text-sm text-foreground outline-none focus-visible:border-accent"
        >
          <option value="" disabled>
            Choisir un modèle
          </option>
          {models.map((model) => (
            <option key={model.slug} value={model.name}>
              {model.name}
            </option>
          ))}
          <option value="Autre / conseil">Autre / conseil</option>
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Essai, disponibilité, financement…"
        />
      </div>
      <Button type="submit" variant="accent" className="w-fit">
        Envoyer la demande
      </Button>
    </form>
  );
}
