"use client"

import { useTheme } from "next-themes"

import { FlickeringGrid } from "@/components/ui/flickering-grid"

export function ThemedFlickeringGrid(
  props: React.ComponentProps<typeof FlickeringGrid>
) {
  const { resolvedTheme } = useTheme()

  return (
    <FlickeringGrid
      {...props}
      color={resolvedTheme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"}
    />
  )
}
