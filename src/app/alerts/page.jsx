"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const severityColors = {
  critical: "bg-red-500 text-white",
  moderate: "bg-orange-500 text-white",
  minor: "bg-green-500 text-white",
};

const LeakAlerts = () => {
  const [leakData, setLeakData] = useState([
    { timestamp: "2024-10-27 10:00",status:"Leak", location: "Bathroom", severity: "critical", description: "High flow detected in bathroom sink.", action: "Inspect sink and pipes." },
    { timestamp: "2024-10-27 12:30",status:"Continuous flow", location: "Kitchen", severity: "moderate", description: "Continuous water usage in kitchen.", action: "Check dishwasher and faucet." },
    { timestamp: "2024-10-27 15:45",status:"Leak", location: "Garden", severity: "minor", description: "Slightly higher water usage than usual.", action: "Check garden hose and sprinkler system." },
  ]);

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Leak Detection & Alerts</h2>
      {leakData.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leakData.map((alert, index) => (
              <TableRow key={index}>
                <TableCell>{alert.timestamp}</TableCell>
                <TableCell>{alert.status }</TableCell>
                <TableCell>{alert.location}</TableCell>
                <TableCell>
                  <Badge className={severityColors[alert.severity]}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>{alert.description}</TableCell>
                <TableCell>{alert.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-gray-500 italic">No leak alerts at this time.</p>
      )}
    </Card>
  );
};

export default LeakAlerts;

