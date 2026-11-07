import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { partnershipForm } from "@/content/shared";
import { partnershipSchema, type PartnershipValues } from "@/lib/partnership-schema";
import { proposalMessage, whatsappUrl } from "@/lib/whatsapp";

const emptyValues = {
  organization: "",
  country: "Colombia",
  website: "",
  contactName: "",
  email: "",
  category: "",
  description: "",
  consent: false,
} as unknown as PartnershipValues;

export function PartnershipForm() {
  const form = useForm<PartnershipValues>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: emptyValues,
    mode: "onTouched",
  });

  function onSubmit(values: PartnershipValues) {
    window.open(whatsappUrl(proposalMessage(values)), "_blank", "noopener,noreferrer");
    toast.success(partnershipForm.success);
    form.reset(emptyValues);
  }

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-lift md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-flag-blue">{partnershipForm.eyebrow}</p>
      <h3 className="mt-2 font-display text-3xl font-medium">{partnershipForm.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{partnershipForm.intro}</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la organización</FormLabel>
                <FormControl>
                  <Input autoComplete="organization" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>País</FormLabel>
                <FormControl>
                  <Input autoComplete="country-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Persona de contacto</FormLabel>
                <FormControl>
                  <Input autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Sitio web <span className="font-normal text-muted-foreground">(opcional)</span>
                </FormLabel>
                <FormControl>
                  <Input inputMode="url" placeholder="www.ejemplo.org" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de colaboración</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {partnershipForm.categories.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Descripción de la propuesta</FormLabel>
                <FormControl>
                  <Textarea rows={5} className="resize-y" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <div className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={(v) => field.onChange(v === true)} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal leading-snug">
                    Acepto la{" "}
                    <Link to="/privacidad" className="font-medium text-primary underline underline-offset-4">
                      política de tratamiento de datos
                    </Link>
                    .
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="sm:col-span-2">
            <Button type="submit" variant="ink" size="xl" className="w-full sm:w-auto">
              <Send /> {partnershipForm.submit}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
