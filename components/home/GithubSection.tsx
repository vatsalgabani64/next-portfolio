"use client";

import { Suspense } from "react";
import { GitHubCalendar } from "react-github-calendar";
import SectionHeading from "../common/SectionHeading";
import { useThemeToggle } from "../layout/ThemeToggle";
import { Card, CardContent } from "../ui/card";
import { formatDateShort } from "@/lib/utils";
import GithubCalendarErrorBoundary from "./Github/GithubCalendarErrorBoundary";

const GithubSection = () => {
  const { mounted, currentTheme } = useThemeToggle();

  return (
    <section id="github" className="mt-20 flex flex-col justify-center">
      <SectionHeading heading="Github Contributions" />
      <Card className="min-h-45">
        <CardContent className="text-muted-foreground">
          <GithubCalendarErrorBoundary>
            <Suspense fallback={<GithubCalendarLoading />}>
              <GitHubCalendar
                username="vatsalgabani64"
                blockSize={10}
                blockRadius={2}
                blockMargin={3}
                colorScheme={currentTheme === "dark" ? "dark" : "light"}
                fontSize={14}
                throwOnError={true}
                tooltips={{
                  activity: {
                    text: (activity) =>
                      `${activity.count} contributions on ${formatDateShort(
                        activity.date
                      )}`,
                    placement: "top",
                    offset: 6,
                    hoverRestMs: 300,
                    transitionStyles: { duration: 100 },
                    withArrow: true,
                  },
                }}
              />
            </Suspense>
          </GithubCalendarErrorBoundary>
        </CardContent>
      </Card>
    </section>
  );
};

export default GithubSection;

const GithubCalendarLoading = () => (
  <div className="flex items-center justify-center py-16">
    <div className="text-center">
      <div className="border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
      <p className="text-sm text-muted-foreground">
        Loading GitHub activity…
      </p>
    </div>
  </div>
);


