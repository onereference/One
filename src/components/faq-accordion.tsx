"use client"

import type React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export type FAQItem = {
  question: string
  answer: string | React.ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={`w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-xl font-bold text-left">{item.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
