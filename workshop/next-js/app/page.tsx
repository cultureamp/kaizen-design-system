"use client"

import React from "react"

import {
  KaizenProvider,
  FilterDateRangePicker,
  FilterButton,
} from "@kaizen/components"

export default function Home(): React.ReactNode {
  const nonEmptyArrowFunction = (): string => "I am fulfilled"
  return (
    <main className="flex justify-center items-center w-full h-[100vh]">
      <KaizenProvider locale="ja">
        <FilterDateRangePicker
          id="blah"
          label="label"
          locale="en-US"
          renderTrigger={() => <FilterButton label="Trigger" />}
          isOpen={true}
          setIsOpen={nonEmptyArrowFunction}
          selectedRange={{ from: new Date(), to: new Date() }}
          onRangeChange={nonEmptyArrowFunction}
        />
      </KaizenProvider>
    </main>
  )
}
